CREATE TABLE [dbo].[Movie] (
    [MovieId]     INT           NOT NULL,
    [Title]       NVARCHAR (50) NOT NULL,
    [isAvailable] NVARCHAR (50) NOT NULL,
    PRIMARY KEY CLUSTERED ([MovieId] ASC)
);
