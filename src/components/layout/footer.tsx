import * as React from 'react';
import styled from 'styled-components';

const KhoraFooter = styled.footer`
	text-align: center;
	padding: 1em 1em;
	margin-bottom: 20px;
	background: var(--main-fg-color);
	color: var(--main-bg-color);
`;

export default function Footer() {
	return <KhoraFooter>Feed the footer</KhoraFooter>;
}
