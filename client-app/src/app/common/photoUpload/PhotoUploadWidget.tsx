import React, { Fragment, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Col, Row } from 'antd';
import PhotoWidgetDropzone from './PhotoWidgetDropzone';

const PhotoUploadWidget = () => {
    const [files, setFiles] = useState<any[]>([]);

    useEffect(() => {
        return () => {
            files.forEach(file => URL.revokeObjectURL(file.preview))
        }
    })

    return (
        <Fragment>
            <Row gutter={[40, 16]} align='middle' justify='center' style={{ width: '100%', textAlign: 'center' }}>
                <Col span={8}>
                    <p>STEP 1 - ADD Photo</p>
                    <PhotoWidgetDropzone setFiles={setFiles} />
                </Col>
                <Col span={8}>
                    <p>STEP 2 - RESIZE IMAGE</p>
                </Col>
                <Col span={8}>
                    <p>STEP 3 - PREVIEW & UPLOAD</p>
                    {files.length > 0 &&
                        <img src={files[0].preview} />}
                </Col>
            </Row>
        </Fragment>
    )
};

export default observer(PhotoUploadWidget);
