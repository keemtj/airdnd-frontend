import React from 'react';
import Popup from '../Global/Popup';
import styled, { css } from 'styled-components';
import Button from '../Global/Button';
import Toggle from '../Global/Toggle';
import ModalFooter from '../Global/ModalFooter';
import Checkbox from '../Global/Checkbox';
import { NewInput } from '../Global/Input';
import { GiHamburgerMenu } from 'react-icons/gi';

const RefundPopup = popupState => {
  return (
    <FilterPopup className="refund" popupState={false}>
      <StContentWrapper className="refund">
        <StSmallSpan>
          유연한 환불 정책을 제공하는 숙소만 검색 결과에 표시
        </StSmallSpan>
        <Toggle />
      </StContentWrapper>
    </FilterPopup>
  );
};

const RoomTypePopup = popupState => {
  const [check, setCheck] = React.useState(false);

  const onChange = e => {
    setCheck(e.target.checked);
  };
  return (
    <FilterPopup className="roomType" left="15.7rem" popupState={false}>
      <StCheckboxList>
        <StCheckboxWrapper>
          <Checkbox value checked={check} onChange={onChange}>
            <StContentWrapper className="roomType">
              <StLargeSpan>집 전체</StLargeSpan>
              <StSmallSpan>집 전체를 단독으로 사용합니다</StSmallSpan>
            </StContentWrapper>
          </Checkbox>
        </StCheckboxWrapper>
        <StCheckboxWrapper>
          <Checkbox value checked={check} onChange={onChange}>
            <StContentWrapper className="roomType">
              <StLargeSpan>개인실</StLargeSpan>
              <StSmallSpan>
                침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께
                이용할 수도 있습니다
              </StSmallSpan>
            </StContentWrapper>
          </Checkbox>
        </StCheckboxWrapper>
        <StCheckboxWrapper>
          <Checkbox value checked={check} onChange={onChange}>
            <StContentWrapper className="roomType">
              <StLargeSpan>다인실</StLargeSpan>
              <StSmallSpan>
                사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께
                이용합니다
              </StSmallSpan>
            </StContentWrapper>
          </Checkbox>
        </StCheckboxWrapper>
      </StCheckboxList>
    </FilterPopup>
  );
};

const PricePopup = popupState => {
  return (
    <FilterPopup className="price" left="25rem" popupState={true}>
      <StContentWrapper className="price">
        <StLargeSpan>평균 1박 요금은 ₩78,902입니다</StLargeSpan>
        <StRangeWrapper>
          <StRangeBar>
            <StButton btnType="circle" left="0">
              <StIcon />
            </StButton>
            <StButton btnType="circle" right="0">
              <StIcon />
            </StButton>
          </StRangeBar>
          <StGraph>
            <StStick />
            <StStick />
            <StStick />
            <StStick />
            <StStick />
            <StStick />
          </StGraph>
        </StRangeWrapper>
        <StInputWrapper>
          <NewInput
            title="최저 요금"
            value={'12,000'}
            short
            pay="₩"
            // onChange={onChangeInput}
          />
          <span>―</span>
          <NewInput
            title="최고 요금"
            value={'+1,000,000'}
            short
            pay="₩"
            // onChange={onChangeInput}
          />
        </StInputWrapper>
      </StContentWrapper>
    </FilterPopup>
  );
};

const SetDatePopup = popupState => {
  return (
    <StWrapper className="setDate">
      <StPopup left="27rem" popupState={false}>
        <StContentWrapper className="setDate">
          <StLargeSpan>요금을 확인하려면 여행 날짜를 입력하세요</StLargeSpan>
          <Button btnType="color" color="black">
            날짜 입력
          </Button>
        </StContentWrapper>
      </StPopup>
    </StWrapper>
  );
};

const FilterPopup = ({ children, popupState, left, className }) => {
  return (
    <StWrapper className={className}>
      <StPopup left={left} popupState={popupState}>
        {children}
        <StFooter align="space-between">
          <Button btnType="underlined" padding="1rem" fontSize="1.6rem">
            지우기
          </Button>
          <Button
            btnType="color"
            color="black"
            padding="1rem 1.5rem"
            fontSize="1.4rem"
            hover="background: #000"
            transition
          >
            저장
          </Button>
        </StFooter>
      </StPopup>
    </StWrapper>
  );
};

const sizes = {
  refund: '350px',
  roomType: '365px',
  setDate: '350px',
  price: '430px',
};

const StWrapper = styled.div`
  position: relative;
  ${({ className }) => css`
    width: ${sizes[className]};
  `}
`;

const StPopup = styled(Popup)`
  top: -1rem;
  padding: 0;
  width: 100%;
`;

const StContentWrapper = styled.div`
  padding: 2rem;

  &.refund {
    display: flex;
    height: 165px;
    padding-top: 3rem;
  }

  &.roomType {
    padding: 1rem;
    height: 100%;
    & > * {
      margin: 0 0 0.3rem;
    }
  }

  &.setDate {
    height: 110px;
    & > * {
      margin-bottom: 1.3rem;
    }
  }

  &.price {
    height: 330px;
  }
`;

const spanStyle = css`
  line-height: 2rem;
  margin-right: 3rem;
  word-break: keep-all;
  display: block;
`;

const StSmallSpan = styled.span`
  font-size: 1.4rem;
  ${spanStyle}
`;

const StLargeSpan = styled.span`
  font-size: 1.6rem;
  ${spanStyle}
`;

const StCheckboxList = styled.ul`
  padding: 2rem;
  height: 360px;
`;

const StCheckboxWrapper = styled.li`
  margin-bottom: 1rem;
`;

const StInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > * {
    margin: 0 1rem;
  }

  & > span {
    margin: 0;
  }
`;

const StRangeWrapper = styled.div`
  height: 10rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  flex-flow: column-reverse;
`;

const StGraph = styled.ul`
  display: flex;
`;

const StStick = styled.li`
  width: 5px;
  height: 3rem;
  margin: 0 1px;
  border-radius: 1px;
  background: ${({ theme }) => theme.color.gray};
`;

const StRangeBar = styled.div`
  width: 100%;
  height: 3px;
  background: ${({ theme }) => theme.color.gray};
  position: relative;
  display: flex;
  align-items: center;
`;

const StButton = styled(Button)`
  position: absolute;
  right: ${({ right }) => right};
  left: ${({ left }) => left};
`;

const StIcon = styled(GiHamburgerMenu)`
  color: ${({ theme }) => theme.color.gray};
  transform: rotate(90deg);
`;

const StFooter = styled(ModalFooter)`
  padding: 1.5rem 1.5rem 1.5rem 0.5rem;
`;

export { RefundPopup, RoomTypePopup, PricePopup, SetDatePopup };
