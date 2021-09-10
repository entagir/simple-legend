// simpleLegend.js

let simpleLegend = 
{
	gradient: function(values, colors, title)
	{
		// Validation
	
		if(values === undefined){throw new Error('values required');}
		if(colors === undefined){throw new Error('colors required');}
		
		if(values.length != colors.length){throw new Error('the count of values and colors must match');}
		
		title = title || '';
		
		// Generation

		let controlBox = document.createElement('div');
		controlBox.className = 'legend-control-box';
		
		let innerBox = document.createElement('div');
		innerBox.className = 'legend-inner-box';
		
		controlBox.appendChild(innerBox);

		let top = 0.8;
		let left = 3.8;
		
		let titleElem = document.createElement('div');
		titleElem.className = 'legend-title';
		
		let titleP = document.createElement('p');
		titleP.innerText = title;
		
		titleElem.appendChild(titleP);
		innerBox.appendChild(titleElem);
		
		let spanTop = document.createElement('span');
		spanTop.innerText = values[values.length-1];
		
		innerBox.appendChild(spanTop);
		innerBox.appendChild(document.createElement('br'));
		
		let labelsDiff = 0;

		for(let i=values.length-1;i>0;i--)
		{
			let curTop = top + 5.5 * (values.length - i);
			
			let curBlock = document.createElement('div');
			curBlock.className = 'legend-ico';
			curBlock.style.background = 'linear-gradient(0deg, ' + colors[i-1] + ', ' + colors[i] + ')';
			
			let curLabel = document.createElement('span');
			curLabel.className = 'legend-label';
			curLabel.style.top = '' + curTop + 'em';
			curLabel.style.left = '' + left + 'em';
			curLabel.innerText = values[i-1];
			
			curDiff = values[i-1].length - values[values.length-1].length;
			
			if(curDiff > labelsDiff)
			{
				labelsDiff = curDiff;
			}
			
			innerBox.appendChild(curBlock);
			innerBox.appendChild(curLabel);

			if(i != 1)
			{
				innerBox.appendChild(document.createElement('br'));
			}
		}
		
		if(labelsDiff > 0)
		{
			spanTop.style.paddingRight = labelsDiff/2 + 'em';
		}

		return controlBox;	
	}
};
