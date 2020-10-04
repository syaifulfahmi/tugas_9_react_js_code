import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

function PageBreadcrumb(){
    return(
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://github.com/syaifulfahmi/tugas_9_react_js_code" target="blank" >Liga Inggris</Breadcrumb.Item>
                <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}
export default PageBreadcrumb;