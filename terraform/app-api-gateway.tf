resource "aws_apigatewayv2_integration" "lambda_app" {
  api_id = aws_apigatewayv2_api.main.id

  integration_uri    = aws_lambda_function.app.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "post_app" {
  api_id = aws_apigatewayv2_api.main.id

  route_key = "POST /analyze"
  target    = "integrations/${aws_apigatewayv2_integration.lambda_app.id}"
}

resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.app.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.main.execution_arn}/*/*"
}

output "app_base_url" {
  value = aws_apigatewayv2_stage.dev.invoke_url
}
