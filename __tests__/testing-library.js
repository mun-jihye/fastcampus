import { getByTitle, render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("메뉴가 렌더링 되어야 한다", () => {
    const { getByRole } = render(<Index />);

    const memu = getByRole("navigation", {
      name: /fastcampus/g,
    });

    expect(menu).toBeInTheDocument();
  });

  // it("renders a heading", () => {
  //   render(<Home />); // 1. Home 페이지 컴포넌트 렌더링

  //   // 2. 렌더링 된 화면(screen)dptj <name: 'welcome to next.js'> 라는 프로퍼티를 가지고 있는
  //   //     <h$ name: 'welcome to next.js'>...</h$> 태그 요소를 heading 변수로 정의
  //   const heading = screen.getByRole("heading", {
  //     name: /welcome to next\.js!/i,
  //   });

  //   // 3. heading 변수가 DOM 안에 존재하는지 테스트
  //   expect(heading).toBeInTheDocument();
  // });
  it("베너가 렌더링 되어야한다", () => {
    const { getByRole } = render(<Index />);

    const banner = getByRole("banner", {
      name: /fastcampus/g,
    });

    expect(banner).toBeInTheDocument();
  });
});
it("강의목록이 렌더링 되어야 한다", () => {
  const { getByTitle } = render(<Index />);

  const lectureList = getByTitle("lectureList", {
    name: /fastcampus/g,
  });

  expect(lectureList).toBeInTheDocument();
});
