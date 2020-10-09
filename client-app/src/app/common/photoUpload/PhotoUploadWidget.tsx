import React, { Fragment, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Col, Row } from 'antd';
import PhotoWidgetDropzone from './PhotoWidgetDropzone';

const PhotoUploadWidget = () => {
    const [files, setFiles] = useState<any[]>([]);
    return (
        <Fragment>
            <Row style={{ width: '100%' }}>
                <Col span={8}>
                    <p>STEP 1 - add photo</p>
                    <PhotoWidgetDropzone setFiles={setFiles} />
                </Col>
                <Col span={8}>
                    <p>STEP 2 - Resize Image</p>
                </Col>
                <Col span={8}>
                    <p>STEP 3 - Preview & Upload</p>
                    {files.length > 0 &&
                        <img src={files[0].preview} />}
                </Col>
            </Row>
        </Fragment>
    )
};

export default observer(PhotoUploadWidget);
