import React from 'react';
import {View,Text} from 'react-native';

import AreaSelect from '../../common/AreaSelect';
import areaData from '../DepartureScreen/area';

const DestinationScreen =  () => {
    return (
        <AreaSelect areaData={areaData} />
    );
};

export default DestinationScreen;