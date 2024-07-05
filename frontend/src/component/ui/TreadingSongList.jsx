import { Col, Row } from "antd";
import {PlayCircleOutlined} from  '@ant-design/icons';

function TreadingSong() {
  return (
    <>
      <div className="div">
        <Row >
          <Col span={12}>
            <div className="d" style={{display:'flex',alignItems:"center",padding:"10px 0" ,justifyContent:'space-between'}}>
          <div>
            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt=""  style={{ width: "50px",borderRadius:'5px',marginRight:"10px" }}/>  
          <div>
         <div><p>Chetan P</p><span>PCCOE PUNE</span></div></div>
         </div>
         <div style={{display:"flex",alignContent:'center',justifyContent:'center'}}>
        <p>  3.45 </p>   <PlayCircleOutlined/>
          </div>

                      </div>     
                 


          </Col>

       
        </Row>
      </div>
    </>
  );
}

export default TreadingSong;
