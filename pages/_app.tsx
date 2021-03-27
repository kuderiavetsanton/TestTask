// import App from "next/app";
import { createWrapper } from 'next-redux-wrapper'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/store'
import { ThemeProvider } from 'styled-components'

import '../styles/globals.css'

import axios from 'axios'

import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { fetchPostsThunk } from '../store/actions/actionsCreator'

axios.defaults.baseURL = 'https://simple-blog-api.crew.red'
axios.defaults.withCredentials = true

const theme = {
    primary: '#3EB0EF',
    dimGray: '#8f8f8f',
    mainBlack: '#1a1a1a',
    borderRadius: '5px',
}

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        store.dispatch(fetchPostsThunk() as any)
    }, [])
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Navbar />
                <div style={{ marginTop: '60px' }}>
                    <Component {...pageProps} />
                </div>
            </ThemeProvider>
        </Provider>
    )
}

const makeStore = () => store
export const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
