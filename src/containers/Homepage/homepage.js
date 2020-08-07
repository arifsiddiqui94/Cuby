import React from 'react';
import Header from '../../components/header/index';
import AssembleVideo from '../../components/assemble_video/index';
import Description from '../../components/cuby_description';
import Features from '../../components/features';


function homepage() {
    return (
        <div>
            <Header />
            <Description />
            <AssembleVideo />
            <Features />
        </div>
    );
}
export default homepage;