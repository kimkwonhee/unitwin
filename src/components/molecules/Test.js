import React from 'react'
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import testfile from '../../filedownload/test1.pdf'

const Test = () => {
    return (
        <Link src="../../filedownload/test1.pdf">
        </Link>
    )
}

export default Test