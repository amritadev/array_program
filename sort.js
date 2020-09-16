function sorter(array)
{
    var count = array.length - 1,
        swap,
        j,
        i;

    for (j = 0; j < count; j++)
    {

        for (i = 0; i < count; i++)
        {

            if (array[i] > array[i + 1])
            {
                swap = array[i + 1];
                array[i + 1] = array[i];
                array[i] = swap;
            }

        }
    }

    return array;
}

console.log(sorter([4, 10, 2, 9, 11, 3, 13, 5]));