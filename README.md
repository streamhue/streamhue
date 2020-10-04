# Streamhue
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

Streamhue allows livestreamers on channels such as Twitch, YouTube and others, to have interactions with their smartlight systems, to react to donations, subscriptions amongst many other events.\
The project is currently heavily under development and should not be considered usable in any way, shape or form.

## Getting started
`npm run bootstrap` to install and bootstrap.

### VS Code
It is highly recommended you use VS Code and the supplied  workspace file (`streamhue.code-workspace`), together with the *highly* suggested extensions in [our extension pack](https://marketplace.visualstudio.com/items?itemName=streamhue.extensions), for the best possible development experience. (*This extension pack is subject to change, check back to see if there's any new recommendations*)

## Commands
`npm run reset` to wipe `node_modules` and reinstall everything.


## Packages
### Auth
Authentication server, used for login.
### Backend
RESTful API used for registration and configuration storage.
### Common
Common components, models and middleware
### Service
Client background service. Integrates with different streaming providers and smartlight services.
### UI
Used to configure user and service.
### Web
General project website

## Contributing
Please see [CONTRIBUTING.md](CONTRIBUTING.md)

## License
```
Streamhue and all packages related to it
Copyright © 2020 Nicholai Nissen

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by the Free Software Foundation,
either version 3 of the License, or any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
```
