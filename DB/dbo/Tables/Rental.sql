CREATE TABLE [dbo].[Rental] (
    [RentalId]   INT           NOT NULL,
    [UserId]     INT           NOT NULL,
    [MovieId]    INT           NOT NULL,
    [RentalDate] DATETIME      NOT NULL,
    [DueDate]    DATETIME      NOT NULL,
    [isReturned] NVARCHAR (50) NOT NULL,
    PRIMARY KEY CLUSTERED ([RentalId] ASC),
    FOREIGN KEY ([UserId]) REFERENCES [dbo].[User] ([UserId]),
    FOREIGN KEY ([MovieId]) REFERENCES [dbo].[Movie] ([MovieId])
);