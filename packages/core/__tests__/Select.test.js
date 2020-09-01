import React, {createRef} from "react";
import renderer from "react-test-renderer";
import ThemeProvider from "../src/theme/ThemeProvider";
import Label from "../src/Label";
import Select from "../src/Select";

test("Link renders correctly", () => {
    const tree = renderer.create(
        <ThemeProvider>
            <Label htmlFor="cabinClass">Cabin Class</Label>
            <Select id="cabinClass" name="cabinClass" defaultValue="Premium Economy">
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
                <option>
                    With a super long label that doesn't get clobbered by the chevron
                </option>
            </Select>
        </ThemeProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});

