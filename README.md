# Karma+Mocha+Chai vs. Jest

This repo demonstrate how the two unit test set-up work for the same font-end code base.

此代码库演示对相同的代码库采用两种不同的单元测试配置的实际效果。

## Intro | 引言

Jest is an all-in-one tool made by Facebook. You don't need to care what is a test runner, test framework, or assertion library. Jest is all that you need. It requires very little configuration and works nearly out-of-box. Jest raised as a important part of React eco-system. However, it is not perfect as it may look at. The Achilles' heel of Jest is JSDOM: a fake DOM engine that never promised to behave like a real web browser.

Jest 是 Facebook 开发的一体式单元测试工具。你不需要关心什么是测试运行环境，什么是测试框架，什么是断言库。Jest 就是你所需要的全部。它只需要非常少的配置，几乎做到了开箱即用。Jest 随着 React 生态的繁荣而大行其道，然而它并不是那么完美。Jest 的阿喀琉斯之踵就是 JSDOM：一个从来没有想模拟真正 Web 浏览器行为的伪 DOM 引擎。

Jest doesn't understand DOM's layout, dimensions, styles or browsers' advanced API, for example, `ResizeObserver` and `matchMedia()`. We cannot avoid them in code so we have to mock. As a result, we cheat our own tests. Even you get 100% coverage and all these green checks, you doubt whether the code will fail in real world...

Jest 不能理解 DOM 的布局，尺寸，样式，以及浏览器的高级 API，例如 `ResizeObserver`, `matchMedia()`。我们无法在代码中避免使用它们，于是只能去 Mock 很多东西。结果，我们欺骗了我们自己写的测试。即使你达成了 100% 测试覆盖，所有测试用例都标上了绿色对勾，还是会怀疑代码是否在真实环境中会出错...

Karma is a test runner from Google. It is well-known in Angular community and still the best test tool to run your unit tests in real browsers. When people cannot cheat themselves with mocks, they turn to Karma and find it doing a great job! It does need more configuration. But in return, you need no mocks, get more realistic result and even better performance.

Karma 是 Google 开发的测试运行工具。它在 Angular 社区很知名，且仍然是现存最好的在真实浏览器中运行单元测试的工具。当人们无法忍受太多 Mock，他们通常会转投 Karma 然后发现它真香！它确实需要多一些配置工作。但是作为回报，你不需要再 Mock 浏览器的特性，还能获得更真实的测试结果，甚至更佳的性能。

Karma cannot work alone. You need at least a test framework (Mocha) and an assertion library (Chai).

Karma 不能单独使用。你至少需要一个测试框架（例如 Mocha）和一个断言库（例如 Chai）。

## Unit Test Set-up

| Name              | KMC-Kit | Jest-Kit        |
| ----------------- | ------- | --------------- |
| Assertion Library | Chai    | Jest            |
| Test Framework    | Mocha   | Jest            |
| Test Runner       | Karma   | Jest            |
| Test Runtime      | Chrome  | JSDOM + Node.js |

### Jest-Kit
