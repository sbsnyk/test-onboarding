# Snyk POC Links #

## Snyk Code (SAST) ##

* [Supported languages and frameworks](https://docs.snyk.io/scan-application-code/snyk-code/snyk-code-language-and-framework-support)
* [List of rules](https://docs.snyk.io/scan-application-code/snyk-code/security-rules-used-by-snyk-code)

## Snyk Open Source (SCA) ##

* [Vulnerability database](https://security.snyk.io/)
* [Vulnerability database information](https://docs.snyk.io/scan-application-code/snyk-open-source/starting-to-fix-vulnerabilities/using-the-snyk-vulnerability-database)
* [Supported ecosystems](https://docs.snyk.io/scan-application-code/snyk-open-source/snyk-open-source-supported-languages-and-package-managers)

## Snyk CLI cheat sheet ##
Cheat sheet:
```shell
npm install snyk -g                                           // installation
snyk test --all-projects --sarif > sca-results.sarif          // run Snyk Open Source (SCA) in the current directory
snyk code test --sarif > sast-results.sarif                   // run Snyk Code in the current directory
snyk container test --sarif ubuntu > container-results.sarif  // run Snyk Container on the specified Docker image
snyk iac test --sarif > iac-results.sarif                     // run Snyk Infrastructure as Code
snyk test --json | npx snyk2spdx | jq > sbom.json             // Software Bill of Materials
```

## Case Studies ##
* [Snyk Customer Value Study](https://snyk.io/reports/customer-value-study-2022/)
* [Atlassian](https://snyk.io/case-studies/atlassian/): "We were using our previous tool as a stopgap for container scanning on our Trello product, but we needed a product that could scale. That meant we wanted a product where we didn’t have to manage our own infrastructure and that offered developer-friendly data for easier vulnerability remediation." (Will Ratner, Senior Product Security Engineer)
* [Citrix](https://snyk.io/case-studies/citrix/): "Our developers use virtually every language except COBOL and we use both cloud services and on-prem systems. Snyk tested well in our diverse environment and ticked off more boxes than the other tools we were testing." (Rob Hather, Security Product Manager)
* [Reddit](https://snyk.io/case-studies/reddit/): "Snyk is very dev-centric and was also easy for us to scale out without being disruptive to developers." (Spencer Koch, Reddit Security)

## How Snyk handles data ##
* [Policy](https://docs.snyk.io/more-info/how-snyk-handles-your-data)

## Upcoming features ##
* [DeepCode AI Fix](https://youtu.be/R_y_G6OlX_8)
* PR checks for Snyk Code
* C/C++ analysis

## Pricing ##
* [Plans](https://snyk.io/plans/)
