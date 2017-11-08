import {connect} from 'react-redux';
import Search from './component';

const mapStateToProps = (state) => {
    return {
        departureCitySelectShow:state.search.departureCityShow,
        destinationCitySelectShow:state.search.destinationCitySelectShow
    };
};

export default connect(mapStateToProps)(Search);