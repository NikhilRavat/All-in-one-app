using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bank.Api.Migrations
{
    /// <inheritdoc />
    public partial class addedbankforeignkey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BankId",
                table: "BankAccounts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "BanksId",
                table: "BankAccounts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Enumerations",
                keyColumn: "Id",
                keyValue: 1,
                column: "Created",
                value: new DateTime(2024, 3, 5, 11, 24, 45, 883, DateTimeKind.Local).AddTicks(8747));

            migrationBuilder.UpdateData(
                table: "Enumerations",
                keyColumn: "Id",
                keyValue: 2,
                column: "Created",
                value: new DateTime(2024, 3, 5, 11, 24, 45, 883, DateTimeKind.Local).AddTicks(8770));

            migrationBuilder.UpdateData(
                table: "Enumerations",
                keyColumn: "Id",
                keyValue: 3,
                column: "Created",
                value: new DateTime(2024, 3, 5, 11, 24, 45, 883, DateTimeKind.Local).AddTicks(8773));

            migrationBuilder.CreateIndex(
                name: "IX_BankAccounts_BanksId",
                table: "BankAccounts",
                column: "BanksId");

            migrationBuilder.AddForeignKey(
                name: "FK_BankAccounts_Banks_BanksId",
                table: "BankAccounts",
                column: "BanksId",
                principalTable: "Banks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BankAccounts_Banks_BanksId",
                table: "BankAccounts");

            migrationBuilder.DropIndex(
                name: "IX_BankAccounts_BanksId",
                table: "BankAccounts");

            migrationBuilder.DropColumn(
                name: "BankId",
                table: "BankAccounts");

            migrationBuilder.DropColumn(
                name: "BanksId",
                table: "BankAccounts");

            migrationBuilder.UpdateData(
                table: "Enumerations",
                keyColumn: "Id",
                keyValue: 1,
                column: "Created",
                value: new DateTime(2024, 3, 5, 11, 22, 18, 227, DateTimeKind.Local).AddTicks(9728));

            migrationBuilder.UpdateData(
                table: "Enumerations",
                keyColumn: "Id",
                keyValue: 2,
                column: "Created",
                value: new DateTime(2024, 3, 5, 11, 22, 18, 227, DateTimeKind.Local).AddTicks(9749));

            migrationBuilder.UpdateData(
                table: "Enumerations",
                keyColumn: "Id",
                keyValue: 3,
                column: "Created",
                value: new DateTime(2024, 3, 5, 11, 22, 18, 227, DateTimeKind.Local).AddTicks(9751));
        }
    }
}
