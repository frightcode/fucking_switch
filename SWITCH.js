var slideSwitch = function(liDataValue) {
	jQuery('.bx_slide li[data-value=' + liDataValue + ']').Дальше_Селектор_На_Нужный_Элемент.click();
}

var sliderCollection = [1329, 531, 968] // массив из DataValue li-элементов (вытащи их какнить)
var currentSlide = 0; // индекс текущего слайдера (соответствует индексу массива сверху)

// жмешь стрелку вправо - берется sliderCollection[currentSlide+1]
// влево - sliderCllection[currentSlide-1]
// (предусмотри, чтобы currentSlide всгде циркулился от 0 до li.length)

эвент по клику на стрелку такой:
function() {
	// чекаем, чтобы currentSlide не вылезал за границы
	currentSlide = (currentSlide == sliderCollection.length) 
		? 0 
		: currentSlide + 1;	
	slideSwitch(sliderCollection[currentSlide]);
}