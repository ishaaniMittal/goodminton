#!/bin/bash
      # Helper script for Gradle to call node on macOS in case it is not found
      export PATH=$PATH:/usr/local/Cellar/node@8/8.15.1/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/imittal/Desktop/react/Goodminton/node_modules/nodejs-mobile-react-native/node_modules/.bin:/Users/imittal/Desktop/react/Goodminton/node_modules/.bin:/anaconda3/bin:/anaconda3/condabin:/Users/imittal/anaconda3/bin:/opt/local/bin:/opt/local/sbin:/opt/local/bin:/opt/local/sbin:/opt/chefdk/bin:/Users/imittal/.chefdk/gem/ruby/2.1.0/bin:/opt/chefdk/embedded/bin::/Users/imittal/.rbenv/shims:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet:/opt/X11/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/Applications/DevDesktop/tools
      node $@
    