angular
    .module('app')
    .controller('HomeController', HomeController);

function HomeController() {

    var vm = this;
    vm.result = 'Result will be Displayed Here!'
    vm.planets = [
        ['Pluto', 0.06],
        ['Neptune', 1.148],
        ['Uranus', 0.917],
        ['Saturn', 1.139],
        ['Jupiter', 2.640],
        ['Mars', 0.3895],
        ['Moon', 0.1655],
        ['Earth', 1],
        ['Venus', 0.9032],
        ['Mercury', 0.377],
        ['Sun', 27.9]
    ];
    vm.calculate = function calculate() {
        vm.result = 'You are on ' + vm.planet[0] + ', and your weight is ' + Math.round(vm.planet[1] * vm.weight * 100) / 100 + " pounds!";

    }
}
