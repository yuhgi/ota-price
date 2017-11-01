import React from 'react';
import {View,Text} from 'react-native';

import AreaSelect from '../../common/AreaSelect';
import areaData from './area';

const DepartureScreen =  () => {
    return (
        <AreaSelect areaData={areaData} />
    );
};

export default DepartureScreen;