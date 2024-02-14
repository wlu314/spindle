
import React from 'react';
import Header from './../layout/headers/header';
import Breadcrumb from '../common/breadcrumbs/breadcrumb';
import CoreFeaturesHomeThree from './CoreFeaturesHomeThree';
import OurFaqArea from './OurFaqArea';
import FooterOne from '../layout/footers/FooterOne';

const About = () => {
    return (
        <>
            <Header  />
            <main>
                <Breadcrumb top_title="About Us"  title='About' />
                <CoreFeaturesHomeThree style={true} />
                <OurFaqArea />
            </main>
            <FooterOne />
        </>
    );
};

export default About;