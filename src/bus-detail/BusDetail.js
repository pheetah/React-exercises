import './styles/Busdetail.css';
import './styles/BusDetailFonts.css';

import { addBusDetail, selectbusDetail } from '../store/bus-detail-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const BusDetail = props => {

    const dispatch = useDispatch()

    const addAction = () => {
        dispatch(addBusDetail('123'));
    }

    return (
        <div className="bottomPanelList">
            <ul className="busstopList">  		
                <li>
                    <a href="#">
                        <div onClick={addAction} className="iconCircle blueIcon">
                            <i className="icon icon-busstop"></i>
                        </div>
                        <p className="stopPlate">123456</p>
                        <span>Şehir Merkezi</span>
                        <div className="miniLabelsWrapper">
                            <span className="bottomPanelListMiniLabel redColor">120</span>
                            <span className="bottomPanelListMiniLabel matteGreenColor">26</span>
                            <span className="bottomPanelListMiniLabel blueColor">132</span>
                            <span className="bottomPanelListMiniLabel blueColor">{useSelector(selectbusDetail)}</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default BusDetail;