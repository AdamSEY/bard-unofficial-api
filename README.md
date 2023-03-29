# Bard <img src="https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg" width="35px" />
Google's Bard chatbot API for NodeJs

## Installation
```bash
 $ yarn add bard-js
```

## Authentication
Go to https://bard.google.com/

- F12 for console
- Copy the values
  - Session: Go to Application → Cookies → `__Secure-1PSID`. Copy the value of that cookie.

## Usage

```bash
$ 
usage: bard-js --session SESSION

options:
  -h, --help         show this help message and exit
  --session SESSION  __Secure-1PSID cookie.
```


Credits:
- [acheong08](https://github.com/acheong08/Bard) - Bard API for Python
- [discordtehe](https://github.com/discordtehe) - Derivative of his original reverse engineering