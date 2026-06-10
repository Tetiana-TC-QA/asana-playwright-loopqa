import { Page, Locator, expect } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // PROJECT NAVIGATION
    async navigateToProject(projectName: string) {
        await this.page.getByRole("button", { name: projectName }).click();
    }

    // COLUMN LOCATORS
    getColumn(columnName: string): Locator {
        return this.page
            .getByRole("heading", { name: new RegExp(columnName, "i") })
            .locator("..");
    }

    // TASK CARD LOCATORS
    getTaskCard(taskTitle: string): Locator {
        return this.page
            .getByRole("heading", { name: new RegExp(taskTitle, "i") })
            .locator("..");
    }

    getTaskTags(taskTitle: string): Locator {
        return this.getTaskCard(taskTitle).locator("span");
    }

    // ASSERTIONS
    async assertTaskInColumn(taskTitle: string, expectedColumn: string) {
        const column = this.getColumn(expectedColumn);
        await expect(column).toContainText(taskTitle);
    }

    async assertTaskHasTags(taskTitle: string, expectedTags: string[]) {
        const card = this.getTaskCard(taskTitle);

        for (const tag of expectedTags) {
            await expect(card.locator("span", { hasText: tag })).toBeVisible();
        }
    }
}