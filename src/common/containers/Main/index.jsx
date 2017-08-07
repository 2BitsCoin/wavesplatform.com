import React from 'react';

// components
import ThemeProvider from '../../components/ThemeProvider';
import Layout from '../../components/Layout';
// import Typography from '../../components/Typography';
// import { Row, Col } from '../../components/Grid';
// import Button from '../../components/Button';
import Background from '../../components/Background';


// containers
import NumbersMain from '../NumbersMain';

// lib
import MainScreen from './lib/MainScreen';


// styles
import injectSheet from 'react-jss';



const PageLayout = ({ classes }) => (
    <Layout>
        <MainScreen />
        <Background style={{ background: 'lightgreen' }}>
            <div style={{height: 500, background: 'lightcyan'}}></div>
        </Background>
    </Layout>
);


// const Page =  injectSheet(styles)(PageLayout);
const Page =  PageLayout;


const App = () => (
    <ThemeProvider>
        <Page />
    </ThemeProvider>
)



export default App;