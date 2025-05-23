# string-analyzer
tech test for Pooch and Mutt

### Create distribution

```
cd app
npm install
npm run build
```

### Create lambda

```
cd terraform
terraform init
terraform apply
```

Outputs url once applied

## Requesting Lambda

Example endpoint
```
https://65a6oalusf.execute-api.eu-west-2.amazonaws.com/dev/analyze
```

Body
```
{
  "text": "Dogs are Great"
}
```

Response
```
{
  "wordCount": 3,
  "characterCount": 12,
  "lineCount": 1,
  "longestWordLength": 5,
  "mostCommonLetter": "g"
}
```