import * as React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import * as S from './style';
import { logo } from '../../assets/index';
import { Button } from '../Common';
import { clearStorage } from '../../utils/token';

function Header() {
  const location = useLocation();
  const history = useHistory();

  const headerItems = [
    {
      link: '/',
      content: '일정',
    },
    {
      link: '/receipt',
      content: '접수 현황',
    },
    {
      link: '/applicant',
      content: '지원자 목록',
    },
    {
      link: '/message',
      content: '메세지 수정',
    },
  ];

  const handleButtonClick = React.useCallback(() => {
    clearStorage();
    history.go(0);
  }, []);

  return (
    <S.HeaderWrapper>
      <Link to="/">
        <S.Logo src={logo} alt="Entry_Logo" />
      </Link>

      <S.HeaderItemsContainer>
        {headerItems.map((item) => (
          <S.HeaderItem
            key={item.content}
            to={item.link}
            // className={location.pathname === item.link && 'selected'}
          >
            {item.content}
          </S.HeaderItem>
        ))}
        <Button className="header_logout" onClick={handleButtonClick}>
          로그아웃
        </Button>
      </S.HeaderItemsContainer>
    </S.HeaderWrapper>
  );
}

export default Header;
