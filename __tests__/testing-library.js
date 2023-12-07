import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />); // 1. Home 페이지 컴포넌트 렌더링

    // 2. 렌더링 된 화면(screen)dptj <name: 'welcome to next.js'> 라는 프로퍼티를 가지고 있는
    //     <h$ name: 'welcome to next.js'>...</h$> 태그 요소를 heading 변수로 정의
    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    // 3. heading 변수가 DOM 안에 존재하는지 테스트
    expect(heading).toBeInTheDocument();
  });
});
