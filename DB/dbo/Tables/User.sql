CREATE TABLE [dbo].[User] (
    [UserId]   INT           NOT NULL,
    [Name]     NVARCHAR (50) NOT NULL,
    [Password] NVARCHAR (50) NOT NULL,
    [Contact]  INT           NOT NULL,
    [Email]    NVARCHAR (50) NOT NULL,
    [Status]   NVARCHAR (50) NOT NULL,
    PRIMARY KEY CLUSTERED ([UserId] ASC)
);
