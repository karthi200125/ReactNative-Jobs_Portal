<<<<<<< HEAD
import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontLoaded)
    //         await SplashScreen.hideAsync();
    // }, [fontLoaded])

    // if (fontLoaded) return null;

    return <Stack />
}


=======
import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontLoaded)
    //         await SplashScreen.hideAsync();
    // }, [fontLoaded])

    // if (fontLoaded) return null;

    return <Stack />
}


>>>>>>> ca2cc533372959e1e7789b047da68f307442ccd3
export default Layout;