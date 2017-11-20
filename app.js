"use strict";

(function () {
        angular.module("ShoppingListCheckOff", [])
            .factory("ShoppingListCheckOffService", [ShoppingListCheckOffService])
            .controller("ToBuyController", ["ShoppingListCheckOffService", ToBuyController])
            .controller("AlreadyBoughtController", ["ShoppingListCheckOffService", AlreadyBoughtController]);

        function ToBuyController(ShoppingListCheckOffService) {
            var toBuy = this;
            toBuy.items = ShoppingListCheckOffService.getToBuyList();
            toBuy.addItem = function(name, quantity) {
                if(name && quantity && quantity > 0) {
                    ShoppingListCheckOffService.addItem(name, quantity);
                }
            }
        }

        function AlreadyBoughtController(ShoppingListCheckOffService) {
            var alreadyBought = this;
            alreadyBought.items = ShoppingListCheckOffService.getAlreadyBought();
        }

        function ShoppingListCheckOffService() {
            var toBuyList = [
                { name: "Chicken", quantity: "500 grams", boughtItem: boughtItem },
                { name: "Coke", quantity: "a bottle of", boughtItem: boughtItem },
                { name: "Cigarettes", quantity: "a pack of", boughtItem: boughtItem },
                { name: "eggs", quantity: 10, boughtItem: boughtItem },

            ];
            var alreadyBought = [];

            function getToBuyList() {
                return toBuyList;
            }

            function getAlreadyBought() {
                return alreadyBought;
            }

            function boughtItem(itemId) {
                alreadyBought.push(toBuyList[itemId]);
                toBuyList.splice(itemId, 1);
            }

            function addItem(name, quantity) {
                toBuyList.push({name: name, quantity: quantity, boughtItem: boughtItem});
            }

            return {
                getToBuyList: getToBuyList,
                getAlreadyBought: getAlreadyBought,
                addItem: addItem
            }
        }

    }
)();