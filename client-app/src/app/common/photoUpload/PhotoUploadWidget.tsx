import React, { Fragment, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Col, Row } from 'antd';
import PhotoWidgetDropzone from './PhotoWidgetDropzone';
import PhotoWidgetCropper from './PhotoWidgetCropper';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'


interface IProps {
    loading: boolean;
    uploadPhoto: (file: Blob) => void;
}

const PhotoUploadWidget: React.FC<IProps> = ({ loading, uploadPhoto }) => {
    const [files, setFiles] = useState<any[]>([]);
    const [image, setImage] = useState<Blob | null>(null)

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
                    {files.length > 0 &&
                        <PhotoWidgetCropper setImage={setImage} imagePreview={files[0].preview} />}
                </Col>
                <Col span={8}>
                    <p>STEP 3 - PREVIEW & UPLOAD</p>
                    {files.length > 0 &&
                        <>
                            <div className='img-preview' style={{ minHeight: '200px', overflow: 'hidden' }} />
                            <Row>
                                <Col span={12}>
                                    <Button loading={loading} onClick={() => uploadPhoto(image!)} style={{ width: "100%" }} type="primary"><CheckOutlined /></Button>
                                </Col>
                                <Col span={12}>
                                    <Button disabled={loading} onClick={() => setFiles([])} style={{ width: "100%" }} danger type="primary"><CloseOutlined /></Button>
                                </Col>
                            </Row>
                        </>}
                </Col>
            </Row>
        </Fragment>
    )
};

export default observer(PhotoUploadWidget);
