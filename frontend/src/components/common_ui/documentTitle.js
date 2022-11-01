import Helmet from 'react-helmet';
import React from 'react';

const DocumentTitle = ({ title }) => {
    const defaultTitle = 'ShopNow';
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );
};

export default DocumentTitle;