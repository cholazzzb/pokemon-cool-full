/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Fragment, FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import Badge from './Badge';
import Link from 'next/link';

const NavigatorContainer = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  justify-content: center;
  background-color: #f2f3f5;
`;

const NavigatorInner = styled.div`
  position: relative;
  display: flex;
  background-color: gray;
  width: 100%;
  margin: 10px;
  border-radius: 10px;
`;

const IconInner = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  font-size: 15px;
  margin: 0px;
`;

export type NavItems = Array<{
  href: string;
  icon?: IconDefinition;
  iconImage?: string;
  text?: string;
  color: string;
  bgColor: string;
  badge?: {
    topPos?: number;
    rightPos?: number;
    text: string;
  };
}>;

type NavigatorProps = {
  navItems?: NavItems;
};

const Navigator: FunctionComponent<NavigatorProps> = ({ navItems }) => {
  return (
    <NavigatorContainer>
      <NavigatorInner>
        {navItems?.map((item) => {
          const LinkTag = styled.a`
            text-decoration: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;
            maxheight: 100%;
            margin: 3px;
            color: ${item.color};
            border-radius: 10px;
            background-color: ${item.bgColor};
            &:hover {
              background-color: #d9dadc;
            }
          `;
          return (
            <Fragment key={`navitem-${item.text}`}>
              <Link href={item.href}>
                <LinkTag>
                  <IconInner>
                    {item.icon ? (
                      <FontAwesomeIcon icon={faBook} />
                    ) : item.iconImage ? (
                      <Image
                        alt={item.iconImage}
                        src={item.iconImage}
                        width={20}
                        height={20}
                      />
                    ) : (
                      <></>
                    )}
                  </IconInner>
                  <Text>{item.text}</Text>
                  {item.badge && (
                    <Badge top={item.badge.topPos} right={item.badge.rightPos}>
                      {item.badge.text}
                    </Badge>
                  )}
                </LinkTag>
              </Link>
            </Fragment>
          );
        })}
      </NavigatorInner>
    </NavigatorContainer>
  );
};

export default Navigator;
