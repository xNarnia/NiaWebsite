import { Col, ColProps } from "react-bootstrap";

const StyledCol: React.FC<ColProps> = ({ ...props }) => {
    return (
      <Col {...props}>
        <div className="col-content">
            {props.children}
        </div>
      </Col>
    );
  };

  export default StyledCol;