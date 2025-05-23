resource "aws_iam_role" "analyze_lambda_exec" {
  name = "analyze-lambda"

  assume_role_policy = jsonencode({
    Version   = "2012-10-17"
    Statement = [
      {
        Action    = "sts:AssumeRole"
        Effect    = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "analyze_lambda_policy" {
  role = aws_iam_role.analyze_lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_lambda_function" "analyze" {
  function_name = "analyze"

  s3_bucket = aws_s3_bucket.lambda_bucket.id
  s3_key = aws_s3_object.lambda_analyze.key

  runtime = "nodejs18.x"
  handler = "handlers/api/analyze.handler"

  source_code_hash = data.archive_file.lambda_analyze.output_base64sha256

  role = aws_iam_role.analyze_lambda_exec.arn
}

resource "aws_cloudwatch_log_group" "analyze" {
  name = "/aws/lambda/${aws_lambda_function.analyze.function_name}"

  retention_in_days = 5
}

data "archive_file" "lambda_analyze" {
  type = "zip"

  source_dir = "../${path.module}/app"
  output_path = "../${path.module}/app.zip"
}

resource "aws_s3_object" "lambda_analyze" {
  bucket = aws_s3_bucket.lambda_bucket.id

  key = "app.zip"
  source = data.archive_file.lambda_analyze.output_path

  etag = filemd5(data.archive_file.lambda_analyze.output_path)
}
