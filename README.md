Might be useful if you're making several mastodon bots, or want to automate the bot installation process for people.

## Command line usage

```sh
$ npm install -g mastodon-register-app
$ mastodon-register-app server.example "my app's name"
app-registration.json written
$ cat app-registration.json
{
  "id": "f1e3c0e159aaade587e769c8b72325a13f176baa101f448b9d47f652dbeab2b1",
  "secret": "7a8f72c089acd7f6b70393046ba8174624f25eac5eaced8da9b58adf3fa3f470",
  "server": "https://server.example",
  "appname": "my app's name"
}
```

You can use it as a libtrary, too.

```sh
$ npm install --save mastodon-register-app
```

```js
const register = require('register')

register('https://server.example', 'My Amazing App')
  .then(reg => {
     // use reg.secret and reg.id
  })
```