#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ItemsService.API/ItemsService.API.csproj ItemsService.API/
COPY ItemsService.Data/ItemsService.Data.csproj ItemsService.Data/
COPY ItemsService.Domain/ItemsService.Domain.csproj ItemsService.Domain/
COPY ItemsService.Service/ItemsService.Service.csproj ItemsService.Service/
RUN dotnet restore "ItemsService.API/ItemsService.API.csproj"
COPY . .
WORKDIR "/src/ItemsService.API"
RUN dotnet build "ItemsService.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ItemsService.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ItemsService.API.dll"]
