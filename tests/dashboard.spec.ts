import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/Login";
import { DashboardPage } from "../pages/Dashboard";
import testCasesData from "../data/testCasesData.json";

const CREDENTIALS = {
  email: "admin",
  password: "password123",
};

interface TestCase {
  id: string;
  project: string;
  taskTitle: string;
  expectedColumn: string;
  expectedTags: string[];
}

test.describe("Demo App: Data-Driven Board Validation", () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    await loginPage.goTo();
    await loginPage.login(CREDENTIALS.email, CREDENTIALS.password);

    await expect(page).not.toHaveURL(/login/i);
    await expect(page.getByText("Logout")).toBeVisible()

  });

  for (const tc of testCasesData as TestCase[]) {
    test(`${tc.id}: "${tc.taskTitle}" is in "${tc.expectedColumn}" (${tc.project})`, async () => {
      
      await dashboardPage.navigateToProject(tc.project);

      await dashboardPage.assertTaskInColumn(tc.taskTitle, tc.expectedColumn);

      await dashboardPage.assertTaskHasTags(tc.taskTitle, tc.expectedTags);
    });
  }
});
