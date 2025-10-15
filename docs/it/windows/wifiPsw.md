---
prev:
  text: 'Windows'
  link: './windows'
---
# View Wifi Password
Open **Command Prompt** then run:
```sh
netsh
```

Show all the possible profile
```sh
wlan show profile
```

Then select the profile (the network)
```sh
wlan show profile "YOUPROFILE" key=clear
```
Under **Key Content** you would see the wifi Password of the selected profile

