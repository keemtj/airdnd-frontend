import React from 'react';
import Division from './Division';
import styled from 'styled-components';
import Calendar from '../Global/Calendar';
import Button from '../Global/Button';

const Schedule = () => {
  return (
    <Division title="Ara-dong, Jeju-si에서 38박" padding="8px">
      <StTravelTerm>2020년 9월 10일 - 2020년 9월 12일</StTravelTerm>
      <Calendar />
      <StKeybordBtn transition transScale="0.88">
        <svg
          aria-hidden="true"
          role="presentation"
          focusable="false"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 2H3v18h26zm-8 13v2H11v-2zm3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm16-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </svg>
      </StKeybordBtn>
      <StDeleteDate btnType="underlined" transition>
        날짜 지우기
      </StDeleteDate>
    </Division>
  );
};

const StTravelTerm = styled.div`
  margin-bottom: 20px;
  line-height: 18px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StKeybordBtn = styled(Button)`
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  border-radius: 50%;

  svg {
    height: 24px;
    width: 24px;
    fill: currentcolor;
  }
`;

const StDeleteDate = styled(Button)`
  vertical-align: super;
  padding: 8px;
  margin-left: calc(100% - 145px);
`;

export default Schedule;
