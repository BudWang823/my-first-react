import React, { useEffect } from 'react'
import store from '../redux/store';

export function useHideTabbar() {
    useEffect(() => {
        store.dispatch({
            type: 'hide_tabbar'
        })
    
        return () => {
            store.dispatch({
                type: 'show_tabbar'
            })
        }
    }, []);
    return store.getState()
}