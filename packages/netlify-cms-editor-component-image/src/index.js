import React from 'react';

const image = {
  label: 'Image',
  id: 'image',
  fromBlock: match =>
    match && {
      image: match[2],
      alt: match[1],
      title: match[3],
    },
  toBlock: data => `![${data.alt || ''}](${data.image || ''} "${data.title}")`,
  // eslint-disable-next-line react/display-name
  toPreview: (data, getAsset) => <img src={getAsset(data.image) || ''} alt={data.alt || ''} title={data.title || ''} />,
  pattern: /^!\[(.*)\]\((.*)[ ]{1}"(.*)"\)$/,
  fields: [
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
    },
    {
      label: 'Alt Text',
      name: 'alt',
    },
    {
      label: 'Title Text',
      name: 'title',
    },
  ],
};

export default image;
