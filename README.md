# Development

To start developing, ensure your environment is set up properly: https://facebook.github.io/react-native/releases/0.23/docs/getting-started.html#content

Once Xcode and Android Studios are set up properly, issue the following command
```
$ npm install
```

To run iOS and Android phone, issue the following commands (must have AVD Emulator running for Android to work)
```
$ npm run port-8080
$ react-native run-ios
$ react-native run-android
```

<b>iOS Hot Reloading:</b> Cmd + D in Simulator, then choose "Enable Hot Reload"

iOS Manual Reloading: Cmd + R in Simulator

<b>Android Hot Reloading:</b> Cmd + M in Simulator, then choose "Enable Hot Reload"

Android Manual Reloading: R + R in Simulator

-------------------------------------------------------------------------------------------------
<b>When to use separate Android/iOS Components, 3rd party dependencies, or go full blown NATIVE</b>

1. Look for 3rd party components
2. Look for React Native components
3. Implement in Swift/Java

The decision of how to go about implementing a component is made with the following goals in mind:

* Don't optimize code TOO early
* Move fast and break things
* Don't re-invent the wheel
