/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';

class ClassicEditor extends ClassicEditorBase {}
// class InlineEditor extends InlineEditorBase {}
class BalloonEditor extends BalloonEditorBase {}

const plugins = [
	Markdown,
	Essentials,
	Base64UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Underline,
	Strikethrough,
	Subscript,
	Superscript,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	// Indent,
	Link,
	// List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TableProperties,
	TableCellProperties,
	TextTransformation,
	SpecialCharacters,
	SpecialCharactersEssentials
];

// Plugins to include in the build.
ClassicEditor.builtinPlugins = plugins;
// InlineEditor.builtinPlugins = plugins;
BalloonEditor.builtinPlugins = plugins;

const config = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'blockQuote',
			'underline',
			'strikethrough',
			'subscript',
			'superscript',
			'link',
			'|',
			'imageUpload',
			'insertTable',
			'mediaEmbed',
			'specialcharacters'
			// 'undo',
			// 'redo'
		]
	},
	image: {
		toolbar: [
			// 'imageStyle:alignLeft',
			// 'imageStyle:alignCenter',
			// 'imageStyle:alignRight',
			// 'imageStyle:full',
			// 'imageStyle:side',
			// '|',
			'imageResize',
			'|',
			'imageTextAlternative'
		],
		styles: [
			// 'alignLeft',
			// 'alignCenter',
			// 'alignRight',
			// 'full',
			// 'side',
			// {
			// 	name: "alignLeft",
			// 	isDefault: true
			// },
			// {
			// 	name: "alignCenter",
			// },
			// {
			// 	name: "alignRight",
			// },
			// {
			// 	name: "full",
			// },
			// {
			// 	name: "side",
			// }

		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
			'tableCellProperties'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

// Editor configuration.
ClassicEditor.defaultConfig = config;
// InlineEditor.defaultConfig = config;
BalloonEditor.defaultConfig = config;

export default {
	// ClassicEditor, InlineEditor
	ClassicEditor, BalloonEditor
};
