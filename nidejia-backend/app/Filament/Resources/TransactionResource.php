<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TransactionResource\Pages;
use App\Filament\Resources\TransactionResource\RelationManagers;
use App\Models\Transaction;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Support\Enums\FontWeight;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Actions\Action;

class TransactionResource extends Resource
{
    protected static ?string $model = Transaction::class;

    public static function canCreate(): bool
    {
        return false;
    }

    protected static ?string $navigationIcon = 'heroicon-o-credit-card';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user_id')
                    ->numeric()
                    ->sortable()
                    ->weight(FontWeight::Bold),
                Tables\Columns\TextColumn::make('listing_id')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('start_date')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('end_date')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('total_days')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('total_price')
                    ->money('USD')
                    ->sortable()
                    ->weight(FontWeight::Bold),
                Tables\Columns\TextColumn::make('status')
                    ->badge()->color(fn(string $state): string => match($state){
                        'waiting' => 'gray',
                        'approved' => 'info',
                        'canceled' => 'danger',
                    }),
            ])
            ->filters([
                SelectFilter::make('status')
                ->options([
                    'waiting' => 'Waiting',
                    'approved' => 'Approved',
                    'canceled' => 'Canceled',
                ])
            ])
            ->actions([
                Action::make('approve')
                    ->button()
                    ->color('success')
                    ->requiresConfirmation()
                    ->action(function(Transaction $transaction){
                        Transaction::find($transaction->id)->update([
                            'status' => 'approved'
                        ]);
                        Notification::make()
                            ->success()
                            ->title('Transaction Approved!')
                            ->body('Transaction has been approved successfully')
                            ->icon('heroicon-o-check')
                            ->send();
                    })
                    ->hidden(fn(Transaction $transaction) => $transaction-> status !=='waiting')
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTransactions::route('/'),
            'create' => Pages\CreateTransaction::route('/create'),
            'edit' => Pages\EditTransaction::route('/{record}/edit'),
        ];
    }
}
