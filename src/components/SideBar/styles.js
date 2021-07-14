import styled from "styled-components";

export default styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #4f1913;
  background: #9A212E;

  li {
    width: 130px;
    color: #fff;
    cursor: pointer;
	text-align: center;
    padding: 3px 10px;
    border-bottom: 1px solid #4f1913;
    border-top: 1px solid transparent;
    transition: all 0.3s;

    &:hover {
      background: #4f1913;
    }
  }

  li.active {
    background: #4f1913;
  }
  .feather {
	width: 24px;
	height: 24px;
	stroke: currentColor;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
	fill: none;
  }
`;
