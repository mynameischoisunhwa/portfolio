import React from 'react';
import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: end;
  column-gap: 12px;
  height: 48px;

  @media (max-width: 414px) {
    column-gap: 0;
  }
`;

const StyledTabItemContainer = styled.div`
  button {
    border: 0 none;
    padding: 8px 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition:
      color 0.5s,
      opacity 0.2s;
    color: ${({ $active }) =>
      !!$active ? 'var(--color-primary)' : 'black'};
  }

  @media (max-width: 414px) {
    column-gap: 0;
    button {
      font-size: 14px;
    }
  }

  @media (any-hover: hover) {
    button:hover {
      opacity: 0.7;
    }
  }
`;

function TabItem({ label, top, onClick, active }) {
  return (
    <StyledTabItemContainer $active={active}>
      <button onClick={() => onClick?.(label, top)}>
        <span>{label}</span>
      </button>
    </StyledTabItemContainer>
  );
}

// TODO add typescript
/*
	@ data = {[key; string]: string}
*/

function Tab({ data }) {
  const dataKeys = Object.keys(data);

  const [_data, set_data] = React.useState({ ...data });
  React.useEffect(() => {
    set_data(data);
  }, [data]);

  return (
    <StyledContainer>
      {dataKeys?.length > 0 &&
        dataKeys
          .map(_key => data[_key])
          .map((_item, _idx) => {
            return (
              <TabItem
                key={`tab-${_item._idx}-${_item.label}`}
                label={_item.label}
                top={_item.top}
                onClick={_item.onClick}
                active={_item.active}
              />
            );
          })}
    </StyledContainer>
  );
}

export default Tab;

{
  /* (<div key={`tab-${_idx}-${label}`}>
					<button style={ style.button } onClick={() =>  onClick?.(label)}>
						<span>{ label }</span>
					</button>
				</div>) */
}
